const userNamesArray = []; // Массив для хранения всех ников
const desiredUserNamesCount = SETNUMBER; // Количество желаемых уникальных ников

async function scrollToEnd() {
    const targetElement = document.querySelector("._aano");

    let previousHeight = 0;
    let currentHeight = targetElement.scrollHeight;

    while (currentHeight !== previousHeight) {
        targetElement.scrollBy(0, currentHeight);
        await new Promise(resolve => setTimeout(resolve, 1000)); // Подождать некоторое время после скролла
        previousHeight = currentHeight;
        currentHeight = targetElement.scrollHeight;
    }
}

async function loadUserNames() {
    await scrollToEnd();

    const userNamesSet = new Set();
    const userNameSpans = document.querySelectorAll('span._aacl._aaco._aacw._aacx._aad7._aade');

    userNameSpans.forEach(userNameSpan => {
        const userName = userNameSpan.textContent.trim();
        userNamesSet.add(userName);
    });

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
