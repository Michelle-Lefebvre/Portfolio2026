# Portfolio2026

https://michelle-lefebvre.github.io/Portfolio2026/

Things I've learnt:
1. Security: Do not use onclick or # on links because the browser can't tell if inline code was your code of malicious code.. Move all user clicks to separate js file.
onclick becomes addEventListener("click")
2. Add meta tag for http content including fonts 
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'; style-src 'self'; ... object-src 'none'; upgrade-insecure-requests">
3. The CSP directive script-src 'self' tells the browser: only run JavaScript that comes from this origin's own files.
4. 4. To prevent jumping when hovering use OUTLINE not border!
