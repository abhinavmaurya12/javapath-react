# Writes all remaining data files for the 200 coding practice questions.
import os, json
BASE = r"C:\Users\navry\OneDrive - hiet.org\Desktop\javapath-core-java_with_AI_Vr.12.5_YT\javapath-react\src\data"

def write_file(name, arr):
    path = os.path.join(BASE, name)
    with open(path, "w", encoding="utf-8") as f:
        f.write("export default " + json.dumps(arr) + "\n")
    print("wrote", name, len(arr), "questions")