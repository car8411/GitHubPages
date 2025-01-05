function showContent(sectionId) {
    // 모든 섹션 숨기기
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // 클릭된 섹션만 보이도록 설정
    const activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active');
}
