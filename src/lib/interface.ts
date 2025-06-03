export interface BlogPost {
    title: string;
    currentSlug: string;
    image: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
}

export interface fullBlog {
    currentSlug: string;
    title: string;
    body: any;
    image: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
}