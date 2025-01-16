document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger-menu');
    const menu = document.querySelector('.menu');
    const simulateQuoteButton = document.getElementById('simulate-quote');
    const form = document.getElementById('quote-form');

    // 햄버거 메뉴 토글
    hamburger.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    // 견적 계산 시뮬레이션
    simulateQuoteButton.addEventListener('click', () => {
        const wordCount = document.getElementById('word-count').value;
        const pricePerWord = 0.1; // 단어당 가격 설정
        const estimatedCost = wordCount * pricePerWord;
        alert(`Estimated Quote: $${estimatedCost.toFixed(2)}`);
    });

    // 폼 제출 시 이메일 전송 (예제, 백엔드 필요)
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Your request has been submitted! We will contact you soon.');
    });

    document.addEventListener('DOMContentLoaded', () => {
        const hamburgerMenu = document.getElementById('hamburger-menu');
        const menu = document.querySelector('menu');
    
        // 햄버거 메뉴 클릭 시 메뉴 토글
        hamburgerMenu.addEventListener('click', () => {
            console.log('Hamburger clicked'); // 로그로 확인
            menu.classList.toggle('active'); // `active` 클래스 추가/제거
        });
    });
    
});
