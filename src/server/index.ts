import { connectionMiddleware } from "co-share-socketio/server"
import { Server } from "socket.io"
import { rootStore } from ".."

const io = new Server({
    cors: {
        methods: ["GET", "POST"],
        credentials: true,
    },
})

io.use(connectionMiddleware(async (socket) => ({ id: socket.id }), rootStore))

io.listen(process.env.PORT == null ? 8080 : Number.parseInt(process.env.PORT))