consideredSensitiveInfos = {
    // Personal Identifiable Information (PII)
    name,
    email,
    firstName,
    lastName,
    phone,
    
    // Location Information
    address,
    lat,
    long,
    
    // Other Sensitive Data
    age,         
    image,       
    fcmToken,   
  };

  branch_info = {
      address,
      email,
      name,
      image
  };

  carts = {
    userId,
    deliveryLat,
    deliveryLong,
    
  }

  Order = {
    userId,
    userName,
    userPhone,
    deliveryAddress,
    deliveryLat,
    deliveryLong,
    isItGift,
  
    // Payment Information
    paymentMethod,
    paymentGateway,
    promoCode,
  
  };

  Rider = {
    mobileNumber,
    name
  }
  
  userRestrictions = {
    phone,
    userName
  }

  zones = {
    name
  }
