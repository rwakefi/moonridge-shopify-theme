import os
import re

def process_file(file_path):
    # Only process text files like liquid, json, css, js, md
    if not re.search(r'\.(liquid|json|css|js|md)$', file_path):
        return

    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content

    # Replace in specific order to prevent partial replacement bugs
    content = re.sub(r'RAFTER M HAT COMPANY', 'MOON RIDGE COMPANY', content)
    content = re.sub(r'Rafter M Hat Company', 'Moon Ridge Company', content)
    content = re.sub(r'Rafter M Hat Co\.', 'Moon Ridge Co.', content)
    content = re.sub(r'Rafter M Hat', 'Moon Ridge', content)
    content = re.sub(r'RAFTER M', 'MOON RIDGE', content)
    content = re.sub(r'Rafter M', 'Moon Ridge', content)

    if content != original_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print('Updated:', file_path)

for root, _, files in os.walk('.'):
    if '.git' in root:
        continue
    for file in files:
        process_file(os.path.join(root, file))

print("Replacement complete.")
