import styled from "styled-components";

export const PostGridBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* display: grid; */
  justify-content: center;
  width: 100%;
  /* grid-template-columns: 1fr 1fr 1fr 1fr 1fr; */
`;

export const PostListWrapper = styled.div`
  width: 20rem;
  background: #fff;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 4px 16px 0px;
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
  margin: 1rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  &:hover {
    transform: translateY(-5px);
    box-shadow: rgba(0, 0, 0, 0.08) 0px 8px 32px 0px;
  }
`;

export const PostThumbNailWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 56.25%;
  overflow: hidden;
  border-radius: 4px 4px 0 0;

  > .thumbnail {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }

  > .skeleton {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

// export const PostThumbNail = styled.img`
//   position: absolute;
//   top: 0px;
//   left: 0px;
//   width: 100%;
//   height: 100%;
//   display: block;
//   object-fit: cover;
// `;

export const ProfileImg = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  margin-right: 0.5rem;
`;

export const ContentsWrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  > h5 {
    font-size: 1rem;
    font-weight: 600;
    margin: 0px 0px 0.25rem;
    line-height: 1.5;
    word-break: break-word;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: #212529;
  }
  > p {
    margin: 0px 0px 1.5rem;
    word-break: break-word;
    overflow-wrap: break-word;
    font-size: 0.875rem;
    line-height: 1.5;
    height: 3.9375rem;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #495057;
  }
`;

export const DateWrapper = styled.div`
  font-size: 0.75rem;
  line-height: 1.5;
  color: #868e96;
  padding: 1rem;
`;

export const UserNameWrapper = styled.div`
  padding: 0.625rem 1rem;
  border-top: 1px solid #f1f3f5;
  display: flex;
  font-size: 0.75rem;
  line-height: 1.5;
  -webkit-box-pack: justify;
  /* justify-content: space-between; */
  align-items: center;
  p {
    > span {
      color: #868e96;
    }
  }
  .info {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    margin-right: 0.5rem;
  }
  .skeletoninfo {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    margin-right: 0.5rem;
  }
`;

export const ScrollToTop = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #f5f5f5;
  border: none;
  outline: none;
  cursor: pointer;
  display: ${(props) => (props.isScroll ? "block" : "none")};
  svg {
    font-size: 30px;
    color: #000;
  }
`;
