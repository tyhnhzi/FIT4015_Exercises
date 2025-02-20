function highlightText() {
    const content = document.getElementById('content');
    const searchInput = document.getElementById('searchInput').value;
    const text = content.innerHTML;
    const regex = new RegExp(`(${searchInput})`, 'gi');
    const highlightedText = text.replace(regex, '<span class="highlight">$1</span>');
    content.innerHTML = highlightedText;
}