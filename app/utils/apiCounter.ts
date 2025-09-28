const LIMIT = 1000

interface Counter {
  date: string
  count: number
}

export function getCounter(): Counter {
  const today = new Date().toISOString().slice(0, 10)
  const stored = localStorage.getItem('api_counter')
  if (!stored) return { date: today, count: 0 }
  const parsed = JSON.parse(stored)
  if (parsed.date !== today) return { date: today, count: 0 }
  return parsed
}

export function incrementCounter(): void {
  const today = new Date().toISOString().slice(0, 10)
  const counter = getCounter()
  const newCount = counter.count + 1
  localStorage.setItem('api_counter', JSON.stringify({ date: today, count: newCount }))
}

export function checkLimit(): void {
  const counter = getCounter()
  if (counter.count >= LIMIT) {
    throw new Error('API limit reached for today')
  }
}

export function getRemaining(): number {
  const counter = getCounter()
  return LIMIT - counter.count
}
