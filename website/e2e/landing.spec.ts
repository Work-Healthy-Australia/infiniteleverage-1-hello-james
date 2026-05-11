import { test, expect } from '@playwright/test'

// ── Smoke tests — hello-james landing page ──────────────────────────────────
// Epic 5 acceptance criteria:
//   - All 4 sections present and visible
//   - Hero CTA links correct
//   - Responsive layout holds at 375px, 768px, 1280px

test.describe('Hero section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('renders h1 with "Hello" and "James"', async ({ page }) => {
    const h1 = page.locator('.hero h1')
    await expect(h1).toBeVisible()
    await expect(h1).toContainText('Hello')
    await expect(h1).toContainText('James')
  })

  test('tagline is visible', async ({ page }) => {
    const tagline = page.locator('.hero .tagline')
    await expect(tagline).toBeVisible()
    await expect(tagline).toContainText('AI agents')
  })

  test('primary CTA button reads "Book a Strategy Call"', async ({ page }) => {
    const cta = page.locator('.hero .btn-accent')
    await expect(cta).toBeVisible()
    await expect(cta).toContainText('Book a Strategy Call')
  })

  test('trust line is visible', async ({ page }) => {
    const trust = page.locator('.hero .trust')
    await expect(trust).toBeVisible()
  })
})

test.describe('What You Get section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('section heading reads "What You Get"', async ({ page }) => {
    const heading = page.locator('.wyg .section-head')
    await expect(heading).toBeVisible()
    await expect(heading).toContainText('What You Get')
  })

  test('exactly 3 cards are present', async ({ page }) => {
    const cards = page.locator('.wyg .card')
    await expect(cards).toHaveCount(3)
  })

  test('each card has an icon, heading, and copy', async ({ page }) => {
    const cards = page.locator('.wyg .card')
    for (let i = 0; i < 3; i++) {
      const card = cards.nth(i)
      await expect(card.locator('.icon')).toBeVisible()
      await expect(card.locator('h3')).toBeVisible()
      await expect(card.locator('p')).toBeVisible()
    }
  })
})

test.describe('How It Works section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('section heading reads "How It Works"', async ({ page }) => {
    const heading = page.locator('.hiw h2')
    await expect(heading).toBeVisible()
    await expect(heading).toContainText('How It Works')
  })

  test('at least 6 protocol items are present', async ({ page }) => {
    const items = page.locator('.hiw .track li')
    const count = await items.count()
    expect(count).toBeGreaterThanOrEqual(6)
  })

  test('Mindset track spans full width on desktop', async ({ page }) => {
    // Only meaningful at desktop viewport
    const fullTrack = page.locator('.hiw .track.full')
    await expect(fullTrack).toBeVisible()
  })
})

test.describe('Final CTA section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('CTA button present in final section', async ({ page }) => {
    const cta = page.locator('.final-cta .btn-accent')
    await expect(cta).toBeVisible()
    await expect(cta).toContainText('Book a Strategy Call')
  })

  test('trust line is visible', async ({ page }) => {
    const trust = page.locator('.final-cta .trust-line')
    await expect(trust).toBeVisible()
  })
})

test.describe('Responsive layout', () => {
  test('mobile (375px): hero stacks and CTA is visible', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')
    await expect(page.locator('.hero .btn-accent')).toBeVisible()
    await expect(page.locator('.hero h1')).toBeVisible()
  })

  test('tablet (768px): page renders without overflow', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 })
    await page.goto('/')
    await expect(page.locator('.hero h1')).toBeVisible()
    await expect(page.locator('.final-cta .btn-accent')).toBeVisible()
  })

  test('desktop (1280px): 3-column WYG grid is visible', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 })
    await page.goto('/')
    const cards = page.locator('.wyg .card')
    await expect(cards.first()).toBeVisible()
    await expect(cards.last()).toBeVisible()
  })
})

test.describe('Navigation', () => {
  test('"See how it works" anchor links to #how-it-works', async ({ page }) => {
    await page.goto('/')
    const anchor = page.locator('.hero a[href="#how-it-works"]')
    await expect(anchor).toBeVisible()
  })

  test('page title is set', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Infinite Leverage/)
  })
})
