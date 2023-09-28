const userNamesArray = []; // Массив для хранения всех ников
const desiredUserNamesCount = SETNUMBER; // Количество желаемых уникальных ников

// Функция для генерации случайного числа в заданном диапазоне
function randomDelay(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

async function scrollToEnd() {
    const targetElement = document.querySelector("._aano");

    let previousHeight = 0;
    let currentHeight = targetElement.scrollHeight;

    while (currentHeight !== previousHeight) {
        targetElement.scrollBy(0, currentHeight);

        // Генерируем случайную задержку от 1 до 3 секунд перед следующей прокруткой
        const delay = randomDelay(1000, 3000);
        await new Promise(resolve => setTimeout(resolve, delay));

        previousHeight = currentHeight;
        currentHeight = targetElement.scrollHeight;
    }
}

async function loadUserNames() {
    await scrollToEnd();

    const userNamesSet = new Set();
    const xpathExpression = '//span[@class="_aacl _aaco _aacw _aacx _aad7 _aade"]';
    const userNameNodes = document.evaluate(xpathExpression, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);

    for (let i = 0; i < userNameNodes.snapshotLength; i++) {
        const userName = userNameNodes.snapshotItem(i).textContent.trim();
        userNamesSet.add(userName);
    }

    // Convert the set to an array and store it in userNamesArray
    const uniqueUserNames = Array.from(userNamesSet).slice(0, desiredUserNamesCount);
    userNamesArray.push(...uniqueUserNames);

    // Вывести уникальные ники списком
    userNamesArray.forEach((userName, index) => {
        console.log(`${index + 1}. ${userName}`);
    });
}

// Start loading usernames
loadUserNames();
