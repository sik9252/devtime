import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Button } from './button'

describe('Button', () => {
  it('기본 variant로 렌더링된다', () => {
    render(<Button>클릭하기</Button>)
    expect(screen.getByRole('button', { name: '클릭하기' })).toBeInTheDocument()
  })

  it('destructive variant로 렌더링된다', () => {
    render(<Button variant="destructive">삭제</Button>)
    const button = screen.getByRole('button', { name: '삭제' })
    expect(button).toBeInTheDocument()
  })

  it('outline variant로 렌더링된다', () => {
    render(<Button variant="outline">외곽선</Button>)
    const button = screen.getByRole('button', { name: '외곽선' })
    expect(button).toBeInTheDocument()
  })

  it('다양한 크기로 렌더링된다', () => {
    const { rerender } = render(<Button size="sm">작게</Button>)
    expect(screen.getByRole('button')).toBeInTheDocument()

    rerender(<Button size="lg">크게</Button>)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('비활성화될 수 있다', () => {
    render(<Button disabled>비활성화</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('onClick 이벤트를 처리한다', () => {
    let clicked = false
    render(<Button onClick={() => { clicked = true }}>클릭</Button>)

    screen.getByRole('button').click()
    expect(clicked).toBe(true)
  })
})
