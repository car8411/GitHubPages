function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    const isVisible = dropdown.style.display === 'block';
    
    // 모든 드롭다운 메뉴 숨기기
    document.querySelectorAll('.dropdown-content').forEach(menu => {
        menu.style.display = 'none';
    });

    // 클릭한 드롭다운만 토글
    dropdown.style.display = isVisible ? 'none' : 'block';
}
