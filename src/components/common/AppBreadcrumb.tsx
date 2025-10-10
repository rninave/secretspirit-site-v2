'use client'

import * as React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { ChevronRight } from 'lucide-react'
import { SlashIcon } from "lucide-react"

interface AppBreadcrumbProps {
  items?: { label: string; href?: string }[]
  className?: string
}

/**
 * AppBreadcrumb — wrapper for shadcn/ui breadcrumb
 * - Uses passed `items` or dynamically generates from current path.
 * - Auto-applies primary color and responsive styling.
 */
export default function AppBreadcrumb({ items, className }: AppBreadcrumbProps) {
  const pathname = usePathname()
  const segments = pathname.split('/').filter(Boolean)

  // Generate from URL if `items` not provided
  const generatedItems =
    items ||
    segments.map((seg, idx) => {
      const href = '/' + segments.slice(0, idx + 1).join('/')
      return {
        label: seg.charAt(0).toUpperCase() + seg.slice(1),
        href: idx === segments.length - 1 ? undefined : href,
      }
    })

  return (
    <Breadcrumb className={className}>
      <BreadcrumbList className='flex align-center font-heading text-xs !gap-1 justify-center'>
        {generatedItems.map((item, index) => {
          const isLast = index === generatedItems.length - 1
          return (
            <React.Fragment key={index}>
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage className="text-primary font-semibold">
                    {item.label}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink
                    asChild
                    className="text-white font-bold hover:underline transition-colors"
                  >
                    <Link href={item.href || '#'}>{item.label}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>

              {!isLast && (
                <BreadcrumbSeparator>
                  <SlashIcon className="text-body text-xs !h-3 !w-3 font-bold -rotate-[20deg]" />
                </BreadcrumbSeparator>
              )}
            </React.Fragment>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
