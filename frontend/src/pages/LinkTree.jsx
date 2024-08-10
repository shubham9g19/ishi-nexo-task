import Navbar from "../components/Home/Navbar";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { api } from "../services/api";
function LinkTreePage() {
  const [links, setLinks] = useState([]);
  const [profile, setProfile] = useState({});
  const { username } = useParams();
  useEffect(() => {

    const fetchProfileLinks = async () => {
      const response = await api.get(`/links/${username}/public`);
      setLinks(response.data.links);
      setProfile({
        username: response.data.username,
        bio: response.data.bio,
        profile_pic: response.data.profile_pic,
      });
    };
    fetchProfileLinks();
  }, []);
  return (
    <>
      <Navbar remove_header={true} />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="sc-bdfBwQ sc-gsTCUz sc-aemoO iIoWHx bhdLno iOmLqx">
        <div className="sc-bdfBwQ sc-gsTCUz ewSEqQ bhdLno">
          <div className="sc-bdfBwQ eqtAab">
            <div className="sc-bdfBwQ sc-fbkhIv iCHEqi erRfmt"></div>
            {profile.username ? (
              <div className="flex flex-col items-center">
                {profile.profile_pic ? (
                  <div className="mb-4" id="profile-picture">
                    <img
                      className="rounded-full object-contain"
                      src="https://ugc.production.linktr.ee/6031db72-f0c0-4d17-915f-82c370237305_IMG-8611-Original-2.jpeg?io=true&amp;size=avatar-v3_0"
                      alt=""
                      style={{ width: 96, height: 96 }}
                      role="presentation"
                      data-testid="ProfileImage"
                      crossorigin="anonymous"
                    />
                  </div>
                ) : (
                  <></>
                )}

                <div
                  className="flex items-center mx-3 max-w-full"
                  id="profile-title"
                >
                  <h1
                    className="text-ellipsis text-lg leading-[1.5] font-[700] text-bodyText"
                    id="profile-sarahwinter-17"
                  >
                    @{profile.username}
                  </h1>
                </div>
                <div className="px-6 mt-[2px]" id="profile-description">
                  <h2 className="text-center text-profileDescription text-profileDescriptionText leading-profileDescription font-profileDescription text-balance">
                    {profile.bio}
                  </h2>
                </div>
              </div>
            ) : (
              <></>
            )}

            <br />
            {links.length === 0 ? (
              <div>No links found</div>
            ) : (
              <div className="mt-xl" id="links-container">
                {links.map((link) => (
                  <div key={link._id}>
                    <div data-id="304232387" className="sc-bdfBwQ pkAuV">
                      <div
                        id="304232387"
                        className="sc-bdfBwQ sc-kLgntA jAmcnV iHaOcn"
                      ></div>
                      <div
                        data-testid="StyledContainer"
                        className="sc-bdfBwQ sc-dmlrTW eua-dhZ NkwoY group"
                        type="classNameIC"
                      >
                        <a
                          href={link.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-testid="LinkButton"
                          className="sc-pFZIQ sc-hHftDr ldGKnQ hxNDJq group"
                          aria-describedby="profile-sarahwinter-17 "
                          height="auto"
                        >
                          <div className="w-full h-full">
                            <div
                              data-testid="LinkThumbnail"
                              className="sc-bdfBwQ sc-gsTCUz sc-bkzZxe bAqGfC bhdLno CvSZl"
                            >
                              <img
                                data-testid="LinkThumbnailImage"
                                src={link.image}
                                alt=""
                                filter=""
                                loading="lazy"
                                crossorigin=""
                                className="sc-iBPRYJ sc-idOhPF gLxBPj ioILqe"
                              />
                            </div>
                            <p className="sc-hKgILt sc-cBNfnY gXKGT inUMaH">
                              {link.description}
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default LinkTreePage;
