function knightMoves(start, end) {
    const directions = [
        [2, 1], [1, 2], [-1, 2], [-2, 1],
        [-2, -1], [-1, -2], [1, -2], [2, -1]
    ]

    const isValid = (x, y) => x >= 0 && x < 8 && y >= 0 && y < 8

    const queue = [[start, [start]]]; // [currentPosition, path]
    const visited = new Set()
    visited.add(start.toString()) // e.g. "0,0"

    while (queue.length > 0) {
        const [current, path] = queue.shift()
        const [x, y] = current

        if (x === end[0] && y === end[1]) {
            console.log(`You made it in ${path.length - 1} moves! Here's your path:`)
            path.forEach(p => console.log(p))
            return path
        }

        for (let [dx, dy] of directions) {
            const newX = x + dx
            const newY = y + dy
            const nextPos = [newX, newY]

            if (isValid(newX, newY) && !visited.has(nextPos.toString())) {
                visited.add(nextPos.toString())
                queue.push([nextPos, [...path, nextPos]])
            }
        }
    }

    console.log("No path found.")
    return []
}

knightMoves([0, 0], [3, 3])