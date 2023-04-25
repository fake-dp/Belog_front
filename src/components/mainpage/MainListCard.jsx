import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useNavigate } from "react-router-dom";
import * as S from "../../styles/mainpage/MainStyled";

const MainListCard = React.memo(
  ({
    postId,
    title,
    contents,
    thumbNail,
    createdAt,
    nickName,
    isLoading,
    memberProfile,
  }) => {
    const navigate = useNavigate();

    const goDetailPage = (postId) => {
      navigate(`/detail/${postId}`);
    };

    return (
      <>
        <S.PostListWrapper onClick={() => goDetailPage(postId)} key={postId}>
          {thumbNail === "" ? null : (
            <S.PostThumbNailWrapper>
              {isLoading ? (
                <div className="skeleton">
                  <Skeleton width={320} height={180} />
                </div>
              ) : (
                <img src={thumbNail} className="thumbnail" alt="Thumbnail" />
              )}
            </S.PostThumbNailWrapper>
          )}

          <S.ContentsWrapper>
            {isLoading ? <Skeleton width={150} /> : <h5>{title}</h5>}
            {isLoading ? (
              <>
                <br />
                <Skeleton count={4} />
              </>
            ) : (
              <p>{contents}</p>
            )}
          </S.ContentsWrapper>
          {!thumbNail && <S.PostThumbNailWrapper></S.PostThumbNailWrapper>}
          <S.DateWrapper>
            {isLoading ? <Skeleton width={150} /> : <p>{createdAt}</p>}
          </S.DateWrapper>
          <S.UserNameWrapper>
            {isLoading ? (
              <div className="skeletoninfo">
                <Skeleton width={320} height={180} />
              </div>
            ) : (
              <S.ProfileImg
                src={memberProfile}
                className="info"
                alt="profile"
              />
            )}

            {isLoading ? (
              <Skeleton width={150} />
            ) : (
              <>
                <p>
                  <span>by</span> {nickName}
                </p>
              </>
            )}
          </S.UserNameWrapper>
        </S.PostListWrapper>
      </>
    );
  }
);

export default MainListCard;
