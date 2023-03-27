import styled from "styled-components";

export const MyPageWrapper = styled.div`
  /* background-color: #f1f3f5; */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
`;

export const ContentsWrapper = styled.div`
  display: flex;
  /* justify-content: center; */
  width: 700px;
`;

export const SettingHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const ImgStyle = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

export const FileInput = styled.input`
  display: none;
`;

export const LabelStyle = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  width: 100px;
  height: 30px;
  border: none;
  border-radius: 5px;
  background-color: #487eb0;
  margin-top: 20px;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #40739e;
  }
`;

export const EditBtn = styled.button`
  width: 100px;
  height: 30px;
  border: none;
  border-radius: 5px;
  background-color: #487eb0;
  margin-top: 10px;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #40739e;
  }
`;

export const EditInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  > h1 {
    font-size: 30px;
    font-weight: 700;
  }
  > p {
    margin-top: 20px;
    font-size: 16px;
    font-weight: 400;
  }
`;

export const ModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  width: 500px;
  height: 300px;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > h1 {
    font-size: 20px;
    font-weight: 700;
  }
  > input {
    margin-top: 20px;
    width: 300px;
    height: 30px;
    border: 1px solid #e9ecef;
    border-radius: 5px;
    padding: 5px;
    font-size: 15px;
    font-weight: 400;
  }
  > div {
    > button {
      margin-top: 20px;
      width: 100px;
      height: 30px;
      background-color: #f1f3f5;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      &:hover {
        background-color: #e9ecef;
      }
    }
  }
`;

export const MySettingListWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MySettingListContents = styled.div`
  width: 700px;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid grey;
  padding-bottom: 30px;
  padding-top: 30px;
`;

export const ListHeader = styled.div`
  display: flex;
  align-items: flex-end;
  > h5 {
    width: 150px;
    font-size: 20px;
    font-weight: 700;
  }
  > p {
    font-size: 13px;
    font-weight: 400;
  }
`;

export const ListPtag = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin-top: 30px;
`;

export const DeleteBtn = styled.button`
  width: 100px;
  height: 30px;
  background-color: #f1f3f5;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 30px;
  &:hover {
    background-color: #e9ecef;
  }
`;

export const EditPtag = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin-top: 30px;
  margin-left: 10px;
  color: #007bff;
  cursor: pointer;
`;
