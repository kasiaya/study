const { createApp, ref, computed, onMounted } = Vue;

createApp({
    setup() {
        // リアクティブな状態
        const tasks = ref([]);
        const newTask = ref('');
        const currentFilter = ref('all');

        // 計算プロパティ
        const activeTasks = computed(() => 
            tasks.value.filter(task => !task.completed)
        );

        const completedTasks = computed(() => 
            tasks.value.filter(task => task.completed)
        );

        const filteredTasks = computed(() => {
            switch (currentFilter.value) {
                case 'active':
                    return activeTasks.value;
                case 'completed':
                    return completedTasks.value;
                default:
                    return tasks.value;
            }
        });

        // ローカルストレージからデータを読み込み
        const loadFromLocalStorage = () => {
            const savedTasks = localStorage.getItem('todoTasks');
            if (savedTasks) {
                tasks.value = JSON.parse(savedTasks);
            }
        };

        // ローカルストレージにデータを保存
        const saveToLocalStorage = () => {
            localStorage.setItem('todoTasks', JSON.stringify(tasks.value));
        };

        // タスクを追加
        const addTask = () => {
            if (newTask.value.trim() === '') return;
            
            const task = {
                id: Date.now(),
                text: newTask.value.trim(),
                completed: false
            };
            
            tasks.value.push(task);
            newTask.value = '';
            saveToLocalStorage();
        };

        // タスクを削除
        const deleteTask = (id) => {
            tasks.value = tasks.value.filter(task => task.id !== id);
            saveToLocalStorage();
        };

        // コンポーネントがマウントされた時にローカルストレージからデータを読み込み
        onMounted(() => {
            loadFromLocalStorage();
        });

        return {
            tasks,
            newTask,
            currentFilter,
            activeTasks,
            completedTasks,
            filteredTasks,
            addTask,
            deleteTask,
            saveToLocalStorage
        };
    }
}).mount('#app');
