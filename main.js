'use strict';
addscreen();
function addscreen() {
    const ape = document.getElementById('add_btn'); //appearの略
    const up = document.getElementById('up');
    ape.addEventListener('click', () => {
        up.classList.remove('hidden');
        const inputTask = document.getElementById('inputTask');
        inputTask.focus();
    });
}


function addTask() {

    //入力確認
    if (inputTask.value.length  <= 0) {
        alert('タスク名を入力して下さい');
        return;
    }

    // タスクを作成
    const task = document.createElement('li');
    task.innerHTML = '<label><input type="checkbox">' + inputTask.value + '<button>削除</button></label>';

    // チェックボックスの changeイベントを設定
    const checkbox = task.getElementsByTagName('input')[0];
    checkbox.addEventListener('change', function () {
        task.className = checkbox.checked ? 'done-task' : '';
    });

    // 削除ボタンの clickイベントを設定
    const button = task.getElementsByTagName('button')[0];
    button.addEventListener('click', function () {
        task.remove();
    });

    // タスクリスト追加
    document.getElementById('taskList').appendChild(task);

    // 入力したタスクをクリア
    inputTask.value = '';
    inputTask.focus();
}

//inputが出ているときにaddをクリックすると全部リセット
//カテゴリ分け(セレクトボックス)を使う

