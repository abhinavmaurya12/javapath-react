// Maps each company to keywords that appear in question titles, topics, categories, or concepts.
// Used to filter the coding-practice question list by company.
const COMPANY_KEYWORDS = {
  'Amazon': ['amazon', 'aws', 's3', 'ec2', 'dynamo', 'kinesis', 'alexa', 'flow', 'delivery', 'basket', 'warehouse', 'prime', 'streaming'],
  'Google': ['google', 'search', 'page', 'rank', 'alphabet', 'android', 'chrome', 'gmail', 'map', 'youtube', 'drive', 'docs'],
  'Apple': ['apple', 'iphone', 'mac', 'ios', 'swift', 'objective', 'metal', 'core', 'spotlight', 'facetime', 'icloud', 'watch'],
  'TikTok': ['tiktok', 'douyin', 'video', 'feed', 'recommend', 'algorithm', 'streaming', 'live', 'creator', 'viral'],
  'Microsoft': ['microsoft', 'azure', 'office', 'windows', 'excel', 'word', 'powerpoint', 'outlook', 'teams', 'sql', 'server', 'active', 'dotnet', 'c#', 'xbox'],
  'Bloomberg': ['bloomberg', 'terminal', 'financial', 'market', 'data', 'news', 'analytics', 'api', 'streaming'],
  'Meta': ['meta', 'facebook', 'instagram', 'whatsapp', 'oculus', 'social', 'graph', 'feed', 'friend', 'timeline', 'react'],
  'Citadel': ['citadel', 'trading', 'market', 'order', 'portfolio', 'risk', 'quant', 'execution', 'hft', 'derivative'],
  'LinkedIn': ['linkedin', 'resume', 'profile', 'network', 'job', 'connection', 'recruiter', 'endorsement', 'feed'],
  'Goldman Sachs': ['goldman', 'sachs', 'investment', 'banking', 'trading', 'portfolio', 'fixed', 'income', 'research', 'asset'],
  'Uber': ['uber', 'lyft', 'ride', 'driver', 'dispatch', 'route', 'navigation', 'eta', 'surge', 'delivery', 'food'],
  'Adobe': ['adobe', 'photoshop', 'illustrator', 'acrobat', 'pdf', 'creative', 'cloud', 'premiere', 'after', 'effects'],
  'Pinterest': ['pinterest', 'pin', 'board', 'feed', 'image', 'recommend', 'search', 'collaborative', 'filtering'],
  'Infosys': ['infosys', 'consulting', 'outsourcing', 'sap', 'oracle', 'cloud', 'digital', 'transformation', 'agile'],
  'Roblox': ['roblox', 'game', 'engine', 'lua', 'virtual', 'avatar', 'world', 'scripting', 'studio', 'multiplayer'],
  'Salesforce': ['salesforce', 'crm', 'cloud', 'lead', 'opportunity', 'account', 'contact', 'campaign', 'report', 'dashboard'],
  'Oracle': ['oracle', 'database', 'sql', 'plsql', 'java', 'cloud', 'erp', 'fusion', 'autonomous', 'backup'],
  'Capital One': ['capital', 'one', 'credit', 'card', 'bank', 'loan', 'savings', 'account', 'fraud', 'detection', 'api'],
  'Walmart Labs': ['walmart', 'labs', 'retail', 'ecommerce', 'inventory', 'supply', 'chain', 'pricing', 'recommendation', 'search'],
  'Nvidia': ['nvidia', 'gpu', 'cuda', 'parallel', 'graphics', 'tensor', 'neural', 'deep', 'learning', 'acceleration']
}

export default COMPANY_KEYWORDS