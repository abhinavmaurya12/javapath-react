const fs = require('fs')
const path = require('path')

const dir = path.join(__dirname, 'src', 'data', 'array-assignment')
const files = fs.readdirSync(dir).sort()

const dataPath = path.join(__dirname, 'src', 'data', 'practiceData.js')
let src = fs.readFileSync(dataPath, 'utf8')

// Anchor: the last existing entry in "Array Programs" is ThirdLargestValueInArray31.java.
// Its value is the final string in the `files` object, so it is immediately followed by
// `"` (closing quote) + actual newline + `    }` (closing brace of the files object).
// Actual newlines only occur between entries (all value-internal newlines are escaped),
// so this anchor is unique after the marker.
const marker = '      "ArrayAssignment/Assign(4)-15-08-[16]/ThirdLargestValueInArray31.java": "'
const markerIdx = src.indexOf(marker)
if (markerIdx === -1) { console.error('marker not found'); process.exit(1) }

const anchor = '"\n    }'
const anchorIdx = src.indexOf(anchor, markerIdx)
if (anchorIdx === -1) { console.error('anchor not found'); process.exit(1) }

// Build the new entries block. JSON.stringify handles all escaping (quotes, backslashes,
// tabs, and any other control characters) correctly.
let block = ''
for (const f of files) {
  const content = fs.readFileSync(path.join(dir, f), 'utf8')
  const escaped = JSON.stringify(content).slice(1, -1)
  block += `      "ArrayAssignment/Assign(5)/${f}": "${escaped}",\n`
}
// Strip trailing comma+newline from the last entry
block = block.replace(/,\n$/, '\n')

// Insert after the closing quote of the last existing entry: add a comma, then the new
// entries, then the rest of the file (which starts with the closing brace of `files`).
const insertPoint = anchorIdx + 1 // just after the closing `"`.
const updated = src.slice(0, insertPoint) + ',\n' + block + src.slice(insertPoint)

fs.writeFileSync(dataPath, updated, 'utf8')
console.log('Inserted', files.length, 'entries into', dataPath)