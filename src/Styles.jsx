import styled from 'styled-components'

export const SelectContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const HeaderContainer = styled.div`
    width: 100%;
    height: 50px;
    background: blue;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    div{
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        p{
            color: white;
            font-family: Helvetica, sans-serif;
            font-size: 18px;
            display: flex;
            align-items: center;
            span{
                display: inline-block;
                width: 20px;
                height: 20px;
                background-color: red;
                border-radius: 10px;
                margin-right: 10px;
            }
        }
    }
`