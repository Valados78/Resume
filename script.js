const buttonsChange = document.querySelectorAll(".skills__nav button");
const elementsChange = [document.querySelector('.skills-discr'), document.querySelector('.education-discr')];

function hideItems() {
    elementsChange.forEach(element => element.classList.add("hide"))
    buttonsChange.forEach(element => element.classList.remove("active"));
}


function showElement(i) {
    elementsChange[i].classList.remove("hide");
    buttonsChange[i].classList.add("active");
}

hideItems();
showElement(0);


buttonsChange.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        hideItems();  
        showElement(index);  
    });
});

// Перемещение по странице

const anchors = document.querySelectorAll(".header__nav a");
const welcomeButton = document.querySelector(".welcome__button a"); // Получаем ссылку "Посмотреть"

anchors.forEach(anc => {
    anc.addEventListener("click", function(event) {
        event.preventDefault();
        
        const id = anc.getAttribute("href").substring(1);
        const el = document.querySelector(`#${id}`);

        window.scroll({
            top: el.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Добавляем обработчик для кнопки "Посмотреть"
welcomeButton.addEventListener("click", function(event) {
    event.preventDefault();
    
    const id = welcomeButton.getAttribute("href").substring(1);
    const el = document.querySelector(`#${id}`);

    window.scroll({
        top: el.offsetTop,
        behavior: 'smooth'
    });
});

// Переход на сайты при клике по div
document.getElementById('myLanding').addEventListener('click', function() {
    window.location.href = 'https://valados78.github.io/SberProj/';
  });

  document.getElementById('myGitHub').addEventListener('click', function() {
    window.location.href = 'https://github.com/Valados78';
  });

//Копирование текста

document.getElementById('copyTel').addEventListener('click', async function(e) {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText('9624544250');
      alert("Телефон скопирован");
    } catch (err) {
      console.error('Ошибка при копировании текста: ', err);
    }
  });

document.getElementById('copyMail').addEventListener('click', async function(e) {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText('vladglzl99@gmail.com');
      alert("Почта скопированна");
    } catch (err) {
      console.error('Ошибка при копировании текста: ', err);
    }
  });