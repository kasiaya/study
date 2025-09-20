// Vue 3のComposition APIから必要な関数をインポート
const { createApp, ref, computed, onMounted } = Vue;

// Vueアプリケーションを作成
createApp({
    setup() {
        // ===== リアクティブな状態管理 =====

        // 全てのタスクを格納する配列（リアクティブ）
        const tasks = ref([]);

        // 新しいタスクの入力値を管理（リアクティブ）
        const newTask = ref('');

        // 現在のフィルター状態を管理（'all', 'active', 'completed'）
        const currentFilter = ref('all');

        // ===== 計算プロパティ（computed） =====
        // これらは依存する値が変更されると自動的に再計算される

        // 未完了のタスクのみを抽出
        const activeTasks = computed(() =>
            tasks.value.filter(task => !task.completed)
        );

        // 完了済みのタスクのみを抽出
        const completedTasks = computed(() =>
            tasks.value.filter(task => task.completed)
        );

        // 現在のフィルター設定に基づいてタスクを絞り込み
        const filteredTasks = computed(() => {
            switch (currentFilter.value) {
                case 'active':
                    return activeTasks.value;  // 未完了タスクのみ
                case 'completed':
                    return completedTasks.value;  // 完了済みタスクのみ
                default:
                    return tasks.value;  // 全てのタスク
            }
        });

        // ===== ローカルストレージ関連の関数 =====

        /**
         * ローカルストレージからタスクデータを読み込む
         * アプリ起動時に実行され、前回保存されたタスクを復元する
         */
        const loadFromLocalStorage = () => {
            try {
                // ローカルストレージから'todoTasks'キーでデータを取得
                const savedTasks = localStorage.getItem('todoTasks');

                // データが存在する場合のみ復元
                if (savedTasks) {
                    // JSON文字列をオブジェクトに変換してtasksに設定
                    tasks.value = JSON.parse(savedTasks);
                }
            } catch (error) {
                // パースエラーなどが発生した場合はコンソールに出力
                console.error('ローカルストレージからの読み込みに失敗しました:', error);
            }
        };

        /**
         * 現在のタスクデータをローカルストレージに保存
         * タスクの追加・削除・状態変更時に呼び出される
         */
        const saveToLocalStorage = () => {
            try {
                // tasksをJSON文字列に変換してローカルストレージに保存
                localStorage.setItem('todoTasks', JSON.stringify(tasks.value));
            } catch (error) {
                // 保存エラーが発生した場合はコンソールに出力
                console.error('ローカルストレージへの保存に失敗しました:', error);
            }
        };

        // ===== タスク操作関数 =====

        /**
         * 新しいタスクを追加する
         * 入力フィールドが空でない場合のみ実行される
         */
        const addTask = () => {
            // 入力値が空文字または空白のみの場合は何もしない
            if (newTask.value.trim() === '') return;

            // 新しいタスクオブジェクトを作成
            const task = {
                id: Date.now(),  // 現在時刻をユニークIDとして使用
                text: newTask.value.trim(),  // 前後の空白を除去
                completed: false  // 初期状態は未完了
            };

            // タスク配列に新しいタスクを追加
            tasks.value.push(task);

            // 入力フィールドをクリア
            newTask.value = '';

            // ローカルストレージに保存
            saveToLocalStorage();
        };

        /**
         * 指定されたIDのタスクを削除する
         * @param {number} id - 削除するタスクのID
         */
        const deleteTask = (id) => {
            // 指定されたID以外のタスクで新しい配列を作成
            tasks.value = tasks.value.filter(task => task.id !== id);

            // 変更をローカルストレージに保存
            saveToLocalStorage();
        };

        // ===== ライフサイクルフック =====

        /**
         * コンポーネントがマウント（DOM要素に接続）された時に実行
         * アプリ起動時にローカルストレージからデータを読み込む
         */
        onMounted(() => {
            loadFromLocalStorage();
        });

        // ===== テンプレートで使用する値と関数を返す =====
        // ここで返したものがHTMLテンプレート内で使用可能になる
        return {
            // リアクティブな状態
            tasks,              // 全タスク配列
            newTask,            // 新規タスク入力値
            currentFilter,      // 現在のフィルター状態

            // 計算プロパティ
            activeTasks,        // 未完了タスク配列
            completedTasks,     // 完了済みタスク配列
            filteredTasks,      // フィルター済みタスク配列

            // 関数
            addTask,            // タスク追加関数
            deleteTask,         // タスク削除関数
            saveToLocalStorage  // ローカルストレージ保存関数（チェックボックス変更時に使用）
        };
    }
}).mount('#app');  // id="app"の要素にVueアプリケーションをマウント
