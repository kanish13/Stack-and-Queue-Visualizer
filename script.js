const stackPush = document.querySelector(".stack-push");
const stackPop = document.querySelector(".stack-pop");
const stackReset = document.querySelector(".stack-reset");
const stackInput = document.querySelector(".stack-input");
const stackBucket = document.querySelector(".main-stack-bucket");
const stackMessage = document.querySelector(".stack-message");
const topBox = document.querySelector(".top-box");
const lastPushBox = document.querySelector(".last-push-box");
const lastPopBox = document.querySelector(".last-pop-box");
const sizeBox = document.querySelector(".size-box");

const stack = [];

// Handle Push
stackPush.addEventListener("click", () => {
    const value = stackInput.value;
    if (!value) {
        stackMessage.innerText = "Please enter a value.";
        return;
    }
    if (stack.length >= 5) {
        stackMessage.innerText = "Stack Overflow!";
        return;
    }

    stack.push(value);

    const ele = document.createElement("div");
    ele.classList.add("ele");
    ele.innerText = value;
    stackBucket.appendChild(ele);

    topBox.innerText = value;
    lastPushBox.innerText = value;
    sizeBox.innerText = stack.length;
    stackMessage.innerText = `Item ${value} pushed.`;

    stackInput.value = "";
});

// Handle Pop
stackPop.addEventListener("click", () => {
    if (stack.length === 0) {
        stackMessage.innerText = "Stack Underflow!";
        return;
    }

    const popped = stack.pop();
    const last = stackBucket.lastElementChild;
    stackBucket.removeChild(last);

    topBox.innerText = stack[stack.length - 1] || "";
    lastPopBox.innerText = popped;
    sizeBox.innerText = stack.length;
    stackMessage.innerText = `Item ${popped} popped.`;
});

// Handle Reset
stackReset.addEventListener("click", () => {
    stack.length = 0;
    stackBucket.innerHTML = "";
    topBox.innerText = "";
    lastPushBox.innerText = "";
    lastPopBox.innerText = "";
    sizeBox.innerText = "0";
    stackMessage.innerText = "Stack reset!";
});


const enqueueBtn = document.querySelector(".queue-enqueue");
const dequeueBtn = document.querySelector(".queue-dequeue");
const queueResetBtn = document.querySelector(".queue-reset");
const queueInput = document.querySelector(".queue-input");
const queueBucket = document.querySelector(".main-queue-bucket");
const queueFrontBox = document.querySelector(".front-box");
const queueRearBox = document.querySelector(".rear-box");
const queueSizeBox = document.querySelector(".size-box");
const queueMessage = document.querySelector(".queue-message");

let queue = [];

// Enqueue
enqueueBtn.addEventListener("click", () => {
    const val = queueInput.value;
    if (val === "") {
        queueMessage.innerHTML = "Please enter a value.";
        return;
    }

    if (queue.length === 10) {
        queueMessage.innerHTML = "Queue Overflow.";
        queueInput.value = "";
        return;
    }

    queue.push(val);

    const item = document.createElement("div");
    item.classList.add("queue-item");
    item.innerText = val;
    queueBucket.appendChild(item);

    queueInput.value = "";
    queueFrontBox.innerText = queue[0];
    queueRearBox.innerText = queue[queue.length - 1];
    queueSizeBox.innerText = queue.length;
    queueMessage.innerHTML = `Item ${val} enqueued.`;
});

// Dequeue
dequeueBtn.addEventListener("click", () => {
    if (queue.length === 0) {
        queueMessage.innerHTML = "Queue Underflow.";
        return;
    }

    const removed = queue.shift();
    queueBucket.removeChild(queueBucket.firstChild);

    queueFrontBox.innerText = queue.length > 0 ? queue[0] : "";
    queueRearBox.innerText = queue.length > 0 ? queue[queue.length - 1] : "";
    queueSizeBox.innerText = queue.length;
    queueMessage.innerHTML = `Item ${removed} dequeued.`;
});

// Reset
queueResetBtn.addEventListener("click", () => {
    queue = [];
    queueBucket.innerHTML = "";
    queueFrontBox.innerText = "";
    queueRearBox.innerText = "";
    queueSizeBox.innerText = "0";
    queueMessage.innerHTML = "Queue has been reset.";
});