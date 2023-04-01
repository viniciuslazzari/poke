'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.css'
import { Table } from '@nextui-org/react';

interface Item {
  id: number,
  name: string,
  gymName: string,
  defendendType: string,
  itemName: string,
  quantity: number
}

export default function Query2() {
  const [data, setData] = useState<Item[]>([]);

  const columns = [
    {
      key: "id",
      label: "ID",
    },
    {
      key: "name",
      label: "NAME",
    },
    {
      key: "gym",
      label: "GYM",
    },
    {
      key: "type",
      label: "TYPE",
    },
    {
      key: "item",
      label: "ITEM",
    },
    {
      key: "quantity",
      label: "QUANTITY",
    },
  ];

  useEffect(() => {
    fetch('https://localhost:44351/INF01145/Query/Second')
      .then(response => response.json())
      .then(data => setData(data));
  }, [])

  return (
    <main className={styles.main}>
      <Table
        aria-label="Example table with dynamic content"
        css={{
          height: "auto",
          minWidth: "100%",
        }}
      >
        <Table.Header columns={columns}>
          {(column) => (
            <Table.Column key={column.key}>{column.label}</Table.Column>
          )}
        </Table.Header>
        <Table.Body items={data}>
          {(item) => (
            <Table.Row key={1}>
              <Table.Cell>{item.id}</Table.Cell>
              <Table.Cell>{item.name}</Table.Cell>
              <Table.Cell>{item.gymName}</Table.Cell>
              <Table.Cell>{item.defendendType}</Table.Cell>
              <Table.Cell>{item.itemName}</Table.Cell>
              <Table.Cell>{item.quantity}</Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    </main>
  )
}
