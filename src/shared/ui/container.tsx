import { cn } from '@/shared/lib/utils'
import React from 'react'

export function Container({
	className,
	children,
}: {
	className?: string
	children: React.ReactNode
}) {
	return (
		<div className={cn('mx-auto max-w-[1280px]', className)}>{children}</div>
	)
}
