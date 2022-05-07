import styled from "styled-components"

const ContentSidebar = () => {
  return (
    <StyledContentSidebar>Hello</StyledContentSidebar>
  )
}

export default ContentSidebar

const StyledContentSidebar = styled.div`
    width: 100%;
    max-width: 250px;
    position: sticky;
    top: 3rem;
`