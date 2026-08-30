import lessons from './lessons.js'
import dsaTopics from './dsaTopics.js'
import practiceData from './practiceData.js'
import javaproData from './javaproData.js'
import interviewQuestions from './interviewQuestions.js'
import dailyChallenges from './dailyChallenges.js'
import frontendHtml from './frontend/frontendHtml.js'
import frontendCss from './frontend/frontendCss.js'
import frontendJavascript from './frontend/frontendJavascript.js'
import frontendReact from './frontend/frontendReact.js'

export { lessons, dsaTopics, practiceData, javaproData, interviewQuestions, dailyChallenges }
export { frontendHtml, frontendCss, frontendJavascript, frontendReact }

export const frontendTracks = {
  html: frontendHtml,
  css: frontendCss,
  javascript: frontendJavascript,
  react: frontendReact
}

export const categoryKeyMap = {
  'basic': 'Basic Programs', 'patterns': 'Pattern Programs', 'pattern-assignment': 'PatternAssignment',
  'number-patterns': 'Number Patterns', 'loops': 'Loop Examples', 'arrays': 'Array Programs',
  'strings': 'String Handling', 'oop': 'OOP Concepts', 'exceptions': 'Exception Handling',
  'threading': 'Multithreading', 'switch-continue': 'Switch & Continue', 'this-super': 'This & Super Keywords',
  'gc': 'Garbage Collection', 'packages': 'Package & Import', 'practice': 'Practice Assignments',
  'awt-swing': 'AWT/Swing GUI', 'friday-fun': 'Friday Fun'
}
export const categoryNameToId = {}
Object.keys(categoryKeyMap).forEach(k => { categoryNameToId[categoryKeyMap[k]] = k })

export const categoryMeta = {
  'basic': { icon: 'fa-code', title: 'Basic Programs', description: 'Fundamental Java programs covering variables, operators, conditionals, and basic I/O operations.' },
  'patterns': { icon: 'fa-th', title: 'Pattern Programs', description: 'Star patterns, number patterns, alphabet patterns — the foundation of nested loop logic.' },
  'pattern-assignment': { icon: 'fa-puzzle-piece', title: 'Pattern Assignment', description: 'Pattern assignment practice problems covering star, number, and alphabet patterns.' },
  'number-patterns': { icon: 'fa-hashtag', title: 'Number Patterns', description: 'Number-based pattern programs using loops and conditional logic.' },
  'loops': { icon: 'fa-redo', title: 'Loop Examples', description: 'For, while, do-while loop variations and control flow demonstrations.' },
  'arrays': { icon: 'fa-layer-group', title: 'Array Programs', description: 'Array declaration, initialization, traversal, sorting, and manipulation.' },
  'strings': { icon: 'fa-font', title: 'String Handling', description: 'String operations, StringBuffer, StringBuilder, and string manipulation.' },
  'oop': { icon: 'fa-cube', title: 'OOP Concepts', description: 'Abstraction, constructors, inheritance, and object-oriented programming principles.' },
  'exceptions': { icon: 'fa-exclamation-triangle', title: 'Exception Handling', description: 'Try-catch, custom exceptions, and error handling patterns.' },
  'threading': { icon: 'fa-sync-alt', title: 'Multithreading', description: 'Thread creation, synchronization, and concurrent programming.' },
  'switch-continue': { icon: 'fa-exchange-alt', title: 'Switch & Continue', description: 'Switch statements and continue/break control flow.' },
  'this-super': { icon: 'fa-link', title: 'This & Super Keywords', description: 'Keyword usage for referencing objects and parent classes.' },
  'gc': { icon: 'fa-trash-alt', title: 'Garbage Collection', description: 'Memory management and garbage collection demonstrations.' },
  'packages': { icon: 'fa-box', title: 'Package & Import', description: 'Package declarations, imports, and multi-file Java projects.' },
  'practice': { icon: 'fa-puzzle-piece', title: 'Practice Assignments', description: 'Practice problems and assignment solutions.' },
  'awt-swing': { icon: 'fa-desktop', title: 'AWT/Swing GUI', description: 'GUI programming with AWT components, event handling, layouts, and Swing.' },
  'friday-fun': { icon: 'fa-gamepad', title: 'Friday Fun', description: 'Fun Java programs from Friday coding sessions - patterns, number games, and creative coding challenges.' }
}