import "regenerator-runtime/runtime";

import React from "react";
import { IKContext } from "imagekitio-react";

const IKProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <IKContext
      urlEndpoint={`https://ik.imagekit.io/${process.env.NEXT_PUBLIC_IK_ID}`}
    >
      {children}
    </IKContext>
  );
};

export default IKProvider;
