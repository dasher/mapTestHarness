package com.crucialdivide.map.testHarness;

import org.appcelerator.titanium.TiApplication;

public class MaptestharnessApplication extends TiApplication {

	@Override
	public void onCreate() {
		super.onCreate();
		
		appInfo = new MaptestharnessAppInfo(this);
	}
}
