// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="../../index.html">Introduction</a></li><li class="chapter-item expanded affix "><li class="part-title">Categories</li><li class="chapter-item expanded "><a href="../../Cross-Site-Scripting/index.html"><strong aria-hidden="true">1.</strong> Cross-Site Scripting</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="../../Cross-Site-Scripting/XSS-DOMBased-Eval/XSS-DOMBased-Eval.html"><strong aria-hidden="true">1.1.</strong> XSS DOM-Based Eval</a></li><li class="chapter-item expanded "><a href="../../Cross-Site-Scripting/XSS-Reflected/XSS-Reflected.html"><strong aria-hidden="true">1.2.</strong> XSS Reflected</a></li><li class="chapter-item expanded "><a href="../../Cross-Site-Scripting/XSS-Stored1/XSS-Stored1.html"><strong aria-hidden="true">1.3.</strong> XSS Stored 1</a></li><li class="chapter-item expanded "><a href="../../Cross-Site-Scripting/XSS-Stored2/XSS-Stored2.html"><strong aria-hidden="true">1.4.</strong> XSS Stored 2</a></li><li class="chapter-item expanded "><a href="../../Cross-Site-Scripting/XSSDOMBased-Angular/XSSDOMBased-Angular.html"><strong aria-hidden="true">1.5.</strong> XSS DOM-Based Angular</a></li><li class="chapter-item expanded "><a href="../../Cross-Site-Scripting/XSSDOMBased-Introduction/XSSDOMBased-Introduction.html"><strong aria-hidden="true">1.6.</strong> XSS DOM-Based Introduction</a></li></ol></li><li class="chapter-item expanded "><a href="../../CSRF/index.html"><strong aria-hidden="true">2.</strong> CSRF</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="../../CSRF/CSRF0protection/CSRF0protection.html"><strong aria-hidden="true">2.1.</strong> CSRF 0 Protection</a></li><li class="chapter-item expanded "><a href="../../CSRF/CSRFtokenbypass/CSRFtokenbypass.html"><strong aria-hidden="true">2.2.</strong> CSRF Token Bypass</a></li></ol></li><li class="chapter-item expanded "><a href="../../Forensics/index.html"><strong aria-hidden="true">3.</strong> Forensics</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="../../Forensics/Docker-layer/Docker-layer.html"><strong aria-hidden="true">3.1.</strong> Docker Layer</a></li><li class="chapter-item expanded "><a href="../../Forensics/Open-My-Vault/Open-My-Vault.html"><strong aria-hidden="true">3.2.</strong> Open My Vault</a></li></ol></li><li class="chapter-item expanded "><a href="../../Javascript/index.html"><strong aria-hidden="true">4.</strong> Javascript</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="../../Javascript/Javascript-Authentication/Javascript-Authentication.html"><strong aria-hidden="true">4.1.</strong> Javascript Authentication</a></li><li class="chapter-item expanded "><a href="../../Javascript/Javascript-Authentication2/Javascript-Authentication2.html"><strong aria-hidden="true">4.2.</strong> Javascript Authentication 2</a></li><li class="chapter-item expanded "><a href="../../Javascript/Javascript-Nativecode/Javascript-Nativecode.html"><strong aria-hidden="true">4.3.</strong> Javascript Nativecode</a></li><li class="chapter-item expanded "><a href="../../Javascript/Javascript-Obfuscation1/Javascript-Obfuscation1.html"><strong aria-hidden="true">4.4.</strong> Javascript Obfuscation 1</a></li><li class="chapter-item expanded "><a href="../../Javascript/Javascript-Obfuscation2/Javascript-Obfuscation2.html"><strong aria-hidden="true">4.5.</strong> Javascript Obfuscation 2</a></li><li class="chapter-item expanded "><a href="../../Javascript/Javascript-Obfuscation3/Javascript-Obfuscation3.html"><strong aria-hidden="true">4.6.</strong> Javascript Obfuscation 3</a></li><li class="chapter-item expanded "><a href="../../Javascript/Javascript-Source/Javascript-Source.html"><strong aria-hidden="true">4.7.</strong> Javascript Source</a></li></ol></li><li class="chapter-item expanded "><a href="../../PHP/index.html"><strong aria-hidden="true">5.</strong> PHP</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="../../PHP/DirectoryTraversal/DirectoryTraversal.html"><strong aria-hidden="true">5.1.</strong> Directory Traversal</a></li><li class="chapter-item expanded "><a href="../../PHP/Fileupload-Doubleextensions/Fileupload-Doubleextensions.html"><strong aria-hidden="true">5.2.</strong> Fileupload Double Extensions</a></li><li class="chapter-item expanded "><a href="../../PHP/Fileupload-MIMEtype/Fileupload-MIMEtype.html"><strong aria-hidden="true">5.3.</strong> Fileupload MIME Type</a></li><li class="chapter-item expanded "><a href="../../PHP/HTTP-Directoryindexing/HTTP-Directoryindexing.html"><strong aria-hidden="true">5.4.</strong> HTTP Directory Indexing</a></li><li class="chapter-item expanded "><a href="../../PHP/LocalFileInclusion/LocalFileInclusion.html"><strong aria-hidden="true">5.5.</strong> Local File Inclusion</a></li><li class="chapter-item expanded "><a href="../../PHP/LocalFileInclusion-DoubleEncoding/LocalFileInclusion-DoubleEncoding.html"><strong aria-hidden="true">5.6.</strong> Local File Inclusion Double Encoding</a></li><li class="chapter-item expanded "><a href="../../PHP/LocalFileInclusion-Wrappers/LocalFileInclusion-Wrappers.html"><strong aria-hidden="true">5.7.</strong> Local File Inclusion Wrappers</a></li><li class="chapter-item expanded "><a href="../../PHP/PHP-assert()/PHP-assert().html"><strong aria-hidden="true">5.8.</strong> PHP assert()</a></li><li class="chapter-item expanded "><a href="../../PHP/PHP-Filters/PHP-Filters.html"><strong aria-hidden="true">5.9.</strong> PHP Filters</a></li><li class="chapter-item expanded "><a href="../../PHP/PHP-registerglobal/PHP-registerglobal.html"><strong aria-hidden="true">5.10.</strong> PHP register global</a></li><li class="chapter-item expanded "><a href="../../PHP/RemoteFileInclusion/RemoteFileInclusion.html"><strong aria-hidden="true">5.11.</strong> Remote File Inclusion</a></li></ol></li><li class="chapter-item expanded "><a href="../../SQL-Injection/index.html"><strong aria-hidden="true">6.</strong> SQL Injection</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="../../SQL-Injection/SQLinjection-Authentication/SQLinjection-Authentication.html"><strong aria-hidden="true">6.1.</strong> SQL Injection Authentication</a></li><li class="chapter-item expanded "><a href="../../SQL-Injection/SQLinjection-AuthenticationGBK/SQLinjection-AuthenticationGBK.html"><strong aria-hidden="true">6.2.</strong> SQL Injection Authentication GBK</a></li><li class="chapter-item expanded "><a href="../../SQL-Injection/SQLinjection-Blind/SQLinjection-Blind.html"><strong aria-hidden="true">6.3.</strong> SQL Injection Blind</a></li><li class="chapter-item expanded "><a href="../../SQL-Injection/SQLinjection-errorbased/SQLinjection-errorbased.html"><strong aria-hidden="true">6.4.</strong> SQL Injection Error Based</a></li><li class="chapter-item expanded "><a href="../../SQL-Injection/SQLinjection-Filereading/SQLinjection-Filereading.html"><strong aria-hidden="true">6.5.</strong> SQL Injection File Reading</a></li><li class="chapter-item expanded "><a href="../../SQL-Injection/SQLinjection-Filterbypass/SQLinjection-Filterbypass.html"><strong aria-hidden="true">6.6.</strong> SQL Injection Filter Bypass</a></li><li class="chapter-item expanded "><a href="../../SQL-Injection/SQLinjection-Insert/SQLinjection-Insert.html"><strong aria-hidden="true">6.7.</strong> SQL Injection Insert</a></li><li class="chapter-item expanded "><a href="../../SQL-Injection/SQLinjection-Routed/SQLinjection-Routed.html"><strong aria-hidden="true">6.8.</strong> SQL Injection Routed</a></li><li class="chapter-item expanded "><a href="../../SQL-Injection/SQLinjection-Time-based/SQLinjection-Time-based.html"><strong aria-hidden="true">6.9.</strong> SQL Injection Time-based</a></li><li class="chapter-item expanded "><a href="../../SQL-Injection/SQLinjectionnumeric/SQLinjectionnumeric.html"><strong aria-hidden="true">6.10.</strong> SQL Injection Numeric</a></li><li class="chapter-item expanded "><a href="../../SQL-Injection/SQLinjectionstring/SQLinjectionstring.html"><strong aria-hidden="true">6.11.</strong> SQL Injection String</a></li><li class="chapter-item expanded "><a href="../../SQL-Injection/SQLTruncation/SQLTruncation.html"><strong aria-hidden="true">6.12.</strong> SQL Truncation</a></li></ol></li><li class="chapter-item expanded "><a href="../../Steganography/index.html"><strong aria-hidden="true">7.</strong> Steganography</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded affix "><a href="contributor.html">Contributors</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
