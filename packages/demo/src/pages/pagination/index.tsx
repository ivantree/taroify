import { Pagination } from "@taroify/core"
import { usePagination } from "@taroify/core/pagination"
import * as React from "react"
import { useState } from "react"
import Block from "../../components/block"
import Page from "../../components/page"
import "./index.scss"

export default function PaginationDemo() {
  const [current, setCurrent] = useState<number>(1)
  const [total] = useState(60)
  const [limit] = useState(10)
  const { count, items } = usePagination({
    current,
    total,
    limit,
  })
  return (
    <Page title="Pagination 分页" className="pagination-demo">
      <Block title="基础用法">
        <Pagination
          current={current}
          limit={limit}
          total={total}
          count={count}
          onChange={({ page }) => setCurrent(page)}
        >
          {/*<Pagination.Item type="previous" hidden />*/}
          {/*<Pagination.Item type="previous" disabled={!hasPrevious} children="上一页" />*/}
          {items?.map((item) => (
            <Pagination.Item key={item.page} {...item} />
          ))}
          {/*<Pagination.Item type="next" disabled={!hasNext} children="下一页" />*/}
        </Pagination>
      </Block>
    </Page>
  )
}