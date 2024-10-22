import { board, Cells } from "./board"

// В объекте хранится список всех позиций, которые были в игре (свойство steps) 
//  и номер текущей позиции в этом списке (current).
export const game: {
    "steps": Cells[],
    "current": number,    
    "move": (index: number) => boolean,
    "toStep": (step: number) => boolean,
    "checkStatus": () => string
} = {
    // TODO
    // Необходимо инициализировать steps массивом с пустой доской
    steps: [], 
    current: 0,
    move: function (index: number): boolean {
        // TODO
        // Вызывает checkStatus, и, если игра окончена, возвращает false
        // Определяет, какой символ ходит, и пытается сделать ход 
        //  с помощью board.move.
        // Если ход можно сделать, то добавляет  новыу позицию в steps, 
        //  обновляет current и возвращает true, иначе возвращает false
        // Нужно учесть, что если вызывалась функция toStep, то 
        //  current можно указывать не на последний элемент steps

        return true
    },
    toStep: function (step: number): boolean {
        // TODO
        // Проверяет, что в steps есть элемент с индексом step,
        //  если нет то возвращает false
        // Делает current равным step и обновляет свойство cell в board
        return true
    },
    checkStatus: function (): string {
        // TODO
        // Возвращает "Ничья", "Победил 0", "Победил X" или "Идет игра"
        //  в зависимости от ситуации на доске
        board.isFill()
        board.checkWin()
        if(board.isFill() == false && board.checkWin() == "_")
            return "Идет игра"
        if(board.checkWin() != "_")
            return `Победил ${board.checkWin()}`
        else return "Ничья"
    }
}