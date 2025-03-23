"use client"

import {
    type ColumnDef,
    type ColumnFiltersState,
    type SortingState,
    getFilteredRowModel,
    getSortedRowModel,
} from "@tanstack/react-table"

import {
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Input } from "@/components/ui/input";
import { useState } from "react";
import { DataForm } from "./event-form"

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}

export function DataTable<TData, TValue>({
    columns,
    data,
}: DataTableProps<TData, TValue>) {
    const [sorting, setSorting] = useState<SortingState>([])
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        state: {
            columnFilters,
            sorting,
        },
    })


    return (
        <div>
            <div className="flex items-center justify-between py-4 space-x-2">
                <Input
                    placeholder="Filter Title (German)..."
                    value={(table.getColumn("titleDe")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("titleDe")?.setFilterValue(event.target.value)
                    }
                />
                <Select onValueChange={(value) =>
                    table.getColumn("type")?.setFilterValue(value === "all" ? undefined : value)
                }>
                    <SelectTrigger >
                        <SelectValue placeholder="Filter by Type..."></SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">all</SelectItem>
                        <SelectItem value="event">event</SelectItem>
                        <SelectItem value="vortrag">vortrag</SelectItem>
                        <SelectItem value="podcast">podcast</SelectItem>
                        <SelectItem value="tv">tv</SelectItem>
                    </SelectContent>
                </Select>
                <DataForm mode="create" />
            </div>
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
