# Fixes the first three data files by rewriting them with proper JSON formatting
import os, json, re
BASE = r"C:\Users\navry\OneDrive - hiet.org\Desktop\javapath-core-java_with_AI_Vr.12.5_YT\javapath-react\src\data"

for fname in ["htmlCssQuestions.js", "frontendQuestions.js", "reactQuestions.js"]:
    path = os.path.join(BASE, fname)
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    # The file uses Python repr with single quotes and None. Convert to JSON-compatible.
    # Replace single-quoted strings with double-quoted, None with null, True/False
    start = content.index("[")
    end = content.rindex("]") + 1
    arr_str = content[start:end]
    # Use a safe eval after converting Python literals
    import ast
    try:
        arr = ast.literal_eval(arr_str)
    except Exception as e:
        print(fname, "literal_eval failed:", e)
        # Try manual conversion
        converted = arr_str.replace("None", "null").replace("True", "true").replace("False", "false")
        # Replace single quotes with double quotes (naive but works for these files)
        converted = converted.replace("'", '"')
        arr = json.loads(converted)
    with open(path, "w", encoding="utf-8") as f:
        f.write("export default " + json.dumps(arr) + "\n")
    print("fixed", fname, len(arr), "questions")