import os
import re

def process_file(file_path):
    # Only process text files
    if not re.search(r'\.(liquid|json|css|js|md)$', file_path):
        return

    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content

    content = re.sub(r'RafterM Article', 'Moon Ridge Article', content)
    content = re.sub(r'Rafter M Article', 'Moon Ridge Article', content)

    if content != original_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print('Updated RafterM Article in:', file_path)

for root, _, files in os.walk('.'):
    if '.git' in root:
        continue
    for file in files:
        process_file(os.path.join(root, file))

print("RafterM Article Replacement complete.")
