import { useEffect, useLayoutEffect, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux'

const Board = () => {
    const canvasRef = useRef(null)
    const shouldDraw = useRef(false)
    const activeMenuItem = useSelector((state) => state.menu.activeMenuItem)
    const {color, size} = useSelector((state) => state.toolbox[activeMenuItem])

    useEffect(() => {
        if (!canvasRef.current) return
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d')

        const changeConfig = () => {
            context.strokeStyle = color
            context.lineWidth = size
        }
        changeConfig()
    }, [color, size])

    // before browser pain
    useLayoutEffect(() => {
        if (!canvasRef.current) return
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d')

        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        const beginPath = (x, y) => {
            context.beginPath()
            context.moveTo(x, y)
        }

        const drawLine = (x, y) => {
            context.lineTo(x, y)
            context.stroke()
        }
        const handleMouseDown = (e) => {
            shouldDraw.current = true
            beginPath(e.clientX, e.clientY)
        }

        const handleMouseMove = (e) => {
            if (!shouldDraw.current) return
            drawLine(e.clientX, e.clientY)
        }

        const handleMouseUp = (e) => {
            shouldDraw.current = false
        }

        canvas.addEventListener('mousedown', handleMouseDown)
        canvas.addEventListener('mousemove', handleMouseMove)
        canvas.addEventListener('mouseup', handleMouseUp)

        return () => {
            canvas.removeEventListener('mousedown', handleMouseDown)
            canvas.removeEventListener('mousemove', handleMouseMove)
            canvas.removeEventListener('mouseup', handleMouseUp)
        }
    }, [])

    return (<canvas ref={canvasRef}></canvas>
    )
}

export default Board;
