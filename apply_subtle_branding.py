import os
import re

def main():
    # 1. Update header-group.json (Add new announcement, disable block)
    header_path = 'sections/header-group.json'
    with open(header_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # disable the block again since the user removed it
    content = content.replace('"disabled": false,', '"disabled": true,')
    
    # add the new announcement
    new_announcement = '''"announcement_rebrand": {
          "type": "announcement",
          "settings": {
            "text": "Rafter M is now Moon Ridge Company. Same heritage, new name.",
            "link": ""
          }
        },
        "announcement_biBzBi": {'''
    content = content.replace('"announcement_biBzBi": {', new_announcement)
    
    # add it to block order
    content = content.replace('"block_order": [', '"block_order": [\n        "announcement_rebrand",')
    
    with open(header_path, 'w', encoding='utf-8') as f:
        f.write(content)


    # 2. Update page.json and page.rafter-m-home.json (The About text)
    # Search for text mentioning Moon Ridge Company being founded or similar. In page.json and home we found "At Moon Ridge, style has never been limited..." Let's see if there is an "Our Story" we missed. Oh wait, "Moon Ridge Company (formerly Rafter M Hat Company) was founded". The user doesn't literally have the word "founded" in those snippets. Wait, let me replace "At Moon Ridge," with "At Moon Ridge (formerly Rafter M Hat Company)," in the interior design text just to be safe, but perhaps there's an actual about us page.
    # Where is the store's main bio? We know page.* has json data. Let me look at index.json.
    
    index_path = 'templates/index.json'
    with open(index_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    content = content.replace('© 2025 MOON RIDGE COMPANY', '© 2026 Moon Ridge Company (formerly Rafter M Hat Co.)')
    
    with open(index_path, 'w', encoding='utf-8') as f:
        f.write(content)
        
    footer_group_path = 'sections/footer-group.json'
    with open(footer_group_path, 'r', encoding='utf-8') as f:
        content = f.read()
    content = content.replace('© 2025 MOON RIDGE COMPANY', '© 2026 Moon Ridge Company (formerly Rafter M Hat Co.)')
    with open(footer_group_path, 'w', encoding='utf-8') as f:
        f.write(content)
        
    custom_footer_path = 'sections/custom-liquid_Footer.liquid'
    with open(custom_footer_path, 'r', encoding='utf-8') as f:
        content = f.read()
    content = content.replace('© 2025 Moon Ridge', '© 2026 Moon Ridge Company (formerly Rafter M Hat Co.)')
    with open(custom_footer_path, 'w', encoding='utf-8') as f:
        f.write(content)
        
    # As for "Our story", let's replace "At Moon Ridge," -> "At Moon Ridge Company (formerly Rafter M Hat Company),"
    page_files = ['templates/page.json', 'templates/page.rafter-m-home.json']
    for p in page_files:
        if os.path.exists(p):
            with open(p, 'r', encoding='utf-8') as f:
                content = f.read()
            content = content.replace('At Moon Ridge,', 'At Moon Ridge Company (formerly Rafter M Hat Company),')
            with open(p, 'w', encoding='utf-8') as f:
                f.write(content)

if __name__ == '__main__':
    main()
