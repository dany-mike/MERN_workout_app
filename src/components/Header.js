import React from 'react'
import Navbar from 'react-bootstrap/Navbar'

function Header () {
    return (
        // Header/ Nav of my app
        <div>
            <Navbar bg="dark">
                <Navbar.Brand href="#home">
                    <img
                    alt='Icon'
                    src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAeFBMVEX///8AAACampru7u65ubkgICCoqKhWVlbT09P8/Pze3t6Xl5dra2skJCTz8/OkpKRkZGTc3NwpKSnKysoKCgrk5ORmZmZ0dHTDw8O6urotLS1+fn4cHByxsbFcXFyPj483NzeHh4dCQkJOTk58fHwVFRVGRkYyMjJUhz8kAAAEmUlEQVR4nO2ci3aiMBCGg3Et0RovyGq9Vbt2+/5vuCBFA8N2wYRpYP+vx9OWlsnwM4TcJkIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEA/iDezlJexEkIlX7aoxISMRqnNUajT3+1t8hLOg5xj5EYTIV+3uc3TQDswyUji7CwwmQgXF7B4y+2tks9T3C1RUklWRVHs/Y+3BZ2Dk3TgKB9hUCayM5g+e09lm2vhJPxYUOKZaPJk6bwSG2IzCLujiYip+8HCymJy6VTn4Cy6I0rFLQ0Oljb1idr85eJ1xsSMup++eqyQU2pz2RlF+DT5oZ24ywKbJoiT3sXJq6XNPmqCOEGclKs6zjgxy/aouZK4Eh/Ou91uEumrX1xxss9EGB/Ol0tSuPJpSCW+5F5OD6lTXJpM01swvjX6P4YuLsYBiQbh0vDz8pc4aefZUSLaGwfOvsRJvCw4ematY2O3pbhBqXKHNWSLk70mgyp+DB+Q8aMjX5woUvjayTXZQgXQfO+d1/Khdy+aLGvi6mJUoUkrdaw4kmOxk4uyZE7cCrk0mdIxWsvxPEd8oyZVcTJ2clGW1NSklTq2Ik66pskDb8lba72vmtjQR00mKspo1HlVIs7OWvRSk3H2fd9wRnOQnfZTe66JMu91Q02Wj2nyXFeT+7tYsTbz09JkhvZOk9wzR6teaiNvjddtY00aNr6baiIn+U/HBack8fvdB+VZnMiB4Ug7l09RhSpk1TxOouHLsDbaRpMT3xCTNFx4QBPaHv+C8Wcf+yFN2AJFFUZMGmuy1fSEL1hYacI3QGulyVL9rC1I8IAmGpqQY8rUxHbRCzTprSYampBjEpqQY9AEmpRB+4T+sT9xwtiOfWFSRAltpBc80N8ZDhogbfqAjP0dsbPRhHGs4KkdBSrRv+7lejemdNdky5nho8TsbblNWR69i5PRNPPs9KoF4xKdQkmeaWLMoSvW8VizqObPTiNHc03qzu8Yz8v3Lc6pr8kqIdjKZs7OstMeiZPvo/a6gjijYUDL8fUsKX/U06RL84C3+eJm9d7tn/s4N4o5dEo7a3K6rcl/FSe0m4s4uVC3+DShQepFxj4R4F3xrY8dlA817U61A0mwXrOtLZ8qUvjZi7Xl4lxya8yXv6PLK5ZXXjRjlZC/C27N+PIy9knhxfR0vsHGr0giNTZr/xln/k5auHlHRk4uyZZr70UNPj6dOoZp2501R1JP8vyhOevCpC9Q148Kh4fDYROLik1yWtZECV0o3FOQX0xBfjEFcUJBnFCgCQXPDgVxQqkaKxhY2qzSZOvRpg3/IqrQxHaKX71Rm7abvnEiV9R/6w7rjtq0raNYof4/W9uk+yX6Mb9Vi6QTaCZuXFk5SPtdB6Xw82PDhpoo8VLS5OCgMjRXeKTMO/TWufZON+YGIPuhi1UPShemCNad2lT3mnUmJ/kI2Mc5drTPsBgePx+f9/mGc3GJM/Qi2mw20cJliKs4TI2G3aldq3F4O++muhgkot1c1m4qktFl3wEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAz/gCsKlUfSuwBQwAAAABJRU5ErkJggg=='
                    width='60'
                    height='60'
                    className="d-inline-block align-top"/>
                </Navbar.Brand>
            </Navbar>
        </div>
    )
}

export default Header