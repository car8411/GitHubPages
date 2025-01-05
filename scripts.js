function showSection(sectionId) {
    // 모든 섹션 숨기기
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => section.classList.remove('active'));

    // 선택된 섹션만 활성화
    const activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active');
}
