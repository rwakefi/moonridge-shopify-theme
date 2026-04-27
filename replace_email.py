import os
import re

def process_file(file_path):
    # Only process text files like liquid, json, css, js, md
    if not re.search(r'\.(liquid|json|css|js|md)$', file_path):
        return

    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content

    content = re.sub(r'info@raftermhatco\.com', 'info@moonridgecompany.com', content)
    content = re.sub(r'zack@raftermhatco\.com', 'zack@moonridgecompany.com', content)
    content = re.sub(r'natalie@raftermhatco\.com', 'natalie@moonridgecompany.com', content)
    content = re.sub(r'@raftermhatco\.com', '@moonridgecompany.com', content)

    if content != original_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print('Updated email in:', file_path)

for root, _, files in os.walk('.'):
    if '.git' in root:
        continue
    for file in files:
        process_file(os.path.join(root, file))

print("Email Replacement complete.")
