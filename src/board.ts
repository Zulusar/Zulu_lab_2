export type Cell = "_" | "X" | "0"
export type Cells = [Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell]

function isCell(sym: string): sym is Cell {
    // TODO
    // Проверяет, является ли sym типа Cell
    // Возвращает true если sym типа Cell, иначе false
    return (sym === "Cell") ? true : false
}
let data: Cell
// В объекте хранится текущая позиция. 
export const board: {
    "cells": Cells,
    "fromString": (str: string) => boolean,
    "toString": () => string,
    "isFill": () => boolean,
    "move": (index: number, cell: Cell) => boolean,
    "getLineChar": (line: number[]) => Cell[],
    "checkWin": () => Cell,
    "winPos": number[][]
} = {
    "cells": ["_", "_", "_", "_", "_", "_", "_", "_", "_"],

    fromString(str: string) {
        // TODO
        // Переписывает из str символы в this.cells
        // Если длина строки не равна 9, возвращает false
        // Если встретиться символ не из Cell возвращает false
        // Если преобразование прошло успешно возвращает true
        let count = 0
        if(str.length != 9) return false
        for( let i =0; i<str.length; i++){
            this.cells[i] = str.split("")[i] as Cell
            if(str.split("")[i]!== "Cell") count++
        }
        return (count == 0)? true : false
        },

    toString(): string {
        // TODO
        // Возвращает строку, состоящую из символов this.cells
        return this.cells.concat.toString() 
    },

    isFill() {
        // TODO
        // Возвращет true если на доске нет пустых клеток
        let count = 0
        for(let i =0; i<9; i++){
            if(this.cells[i] == "_") count ++
        }
        return (count == 0)? true : false
    },

    move(index: number, cell: Cell) {
        // TODO
        // Если ячейка this.cell[index] занята - возвращает false
        // Записывает в ячейку cell и возвращает true
        if(this.cells[index] != "_") return false
        else{
            this.cells[index] = cell
            return true
        }
    },
    
    getLineChar(line: number[]) {
        return [this.cells[line[0]], this.cells[line[1]], this.cells[line[2]]]
    },

    checkWin(): Cell {
        // TODO
        // Если имеется комбинация из трех одинаковых символов "X" или "0" 
        //  в линию - возвращает этот символ
        // Иначе возвращает символ "_"
        let count = 0
        //let data: Cell
        for(let i = 0; i < this.winPos.length; i++){
            if(this.getLineChar(this.winPos[i])[0] == this.getLineChar(this.winPos[i])[1] && this.getLineChar(this.winPos[i])[0] == this.getLineChar(this.winPos[i])[2]){
                count++
                data = this.getLineChar(this.winPos[i])[0]
            }
            else data = "_"     
        }
        return data
    },

    "winPos": [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
}
