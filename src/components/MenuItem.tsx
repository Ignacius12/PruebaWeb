import { formatPrice } from '../data/menu'
import type { MenuItem as MenuItemType } from '../types'

interface MenuItemProps {
  item: MenuItemType
}

export function MenuItem({ item }: MenuItemProps) {
  return (
    <article className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-1 border-b border-line/80 py-4 first:pt-0 last:border-b-0">
      <h3 className="text-[1.02rem] font-medium text-ink md:text-[1.08rem]">
        {item.name}
      </h3>
      <p className="text-right text-[1.02rem] font-medium tabular-nums text-olive md:text-[1.08rem]">
        {formatPrice(item.price)}
      </p>
      <p className="col-span-2 max-w-xl text-sm leading-relaxed text-muted">
        {item.description}
      </p>
    </article>
  )
}
