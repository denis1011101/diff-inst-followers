const userNamesArray = []; // Массив для хранения всех ников
const desiredUserNamesCount = 95; // Количество желаемых уникальных ников

async function scrollAndLoadUserNames() {
    const userNamesSet = new Set();
    const userNameSpans = document.querySelectorAll('span._aacl._aaco._aacw._aacx._aad7._aade');
    const targetElement = document.querySelector("._aano");

    let scrollIndex = 0;

    while (userNamesSet.size < desiredUserNamesCount && scrollIndex < userNameSpans.length) {
        const userName = userNameSpans[scrollIndex].textContent.trim();
        userNamesSet.add(userName);
        scrollIndex++;
        targetElement.scrollBy(0, 40);

        // Wait for some time to allow the new user names to load
        await new Promise(resolve => setTimeout(resolve, 100));
    }

    // Convert the set to an array and store it in userNamesArray
    const uniqueUserNames = Array.from(userNamesSet).slice(0, desiredUserNamesCount);
    userNamesArray.push(...uniqueUserNames);
}

// Функция для удаления дубликатов из массива
function removeDuplicates(arr) {
    return arr.filter((value, index, self) => self.indexOf(value) === index);
}

// Call the function repeatedly until the desired number of usernames is loaded
async function loadDesiredUserNames() {
    while (userNamesArray.length < desiredUserNamesCount) {
        await scrollAndLoadUserNames();
    }

    // Удалить дубликаты из массива
    const uniqueUserNamesArray = removeDuplicates(userNamesArray);

    // Вывести уникальные ники списком
    uniqueUserNamesArray.forEach((userName, index) => {
        console.log(`${index + 1}. ${userName}`);
    });
}

// Start loading usernames
loadDesiredUserNames();
