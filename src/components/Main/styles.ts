import styled from 'styled-components'

const Wrapper = styled.main`
  background-color: #06092b;
  color: #fff;
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Logo = styled.img`
  margin-bottom: 2rem;
  width: 25rem;
`

const Title = styled.h1`
  font-size: 2.5rem;
`

const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`

const Illustration = styled.img`
  margin-top: 3rem;
  width: min(30rem, 100%);
`

export { Wrapper, Logo, Title, Description, Illustration }
