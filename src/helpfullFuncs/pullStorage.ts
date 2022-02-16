interface usePullStorage {
  auth: boolean;
}

const usePullStorage = (auth: usePullStorage) => {
  const authStatus = localStorage.getItem("isAuthorized");
  const adminStatus = localStorage.getItem("authorizedUser");
  let parsedAuth;
  let parsedAdmin;
  // console.log(authStatus);
  if (authStatus == null) {
    localStorage.setItem("isAuthorized", JSON.stringify(auth));
  } else {
    parsedAuth = JSON.parse(authStatus);
  }
  if (adminStatus === null) {
    localStorage.setItem("authorizedUser", JSON.stringify({}));
  } else {
    parsedAdmin = JSON.parse(adminStatus);
  }

  return {
    parsedAuth,
    parsedAdmin,
  };
};

export default usePullStorage;
