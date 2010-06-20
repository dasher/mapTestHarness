package com.crucialdivide.map.testHarness;

import org.appcelerator.titanium.ITiAppInfo;
import org.appcelerator.titanium.TiApplication;
import org.appcelerator.titanium.TiProperties;
import org.appcelerator.titanium.util.Log;

/* GENERATED CODE
 * Warning - this class was generated from your application's tiapp.xml
 * Any changes you make here will be overwritten
 */
public class MaptestharnessAppInfo implements ITiAppInfo
{
	private static final String LCAT = "AppInfo";
	
	
	public MaptestharnessAppInfo(TiApplication app) {
		TiProperties properties = app.getSystemProperties();
					
		properties.setBool("ti.android.debug", true);
					
		properties.setString("ti.deploytype", "development");
					
		properties.setString("ti.android.google.map.api.key", "0ZnKXkWA2dIAu2EM-OV4ZD2lJY3sEWE5TSgjJNg");
	}
	
	public String getId() {
		return "com.crucialdivide.map.testHarness";
	}
	
	public String getName() {
		return "MapTestHarness";
	}
	
	public String getVersion() {
		return "0.1";
	}
	
	public String getPublisher() {
		return "dasher";
	}
	
	public String getUrl() {
		return "http://CrucialDivide.com";
	}
	
	public String getCopyright() {
		return "2010 by dasher";
	}
	
	public String getDescription() {
		return "No description provided";
	}
	
	public String getIcon() {
		return "default_app_logo.png";
	}
	
	public boolean isAnalyticsEnabled() {
		return true;
	}
	
	public String getGUID() {
		return "8c6cb26c-d241-40c4-9486-ffc31be44e33";
	}
	
	public boolean isFullscreen() {
		return false;
	}
	
	public boolean isNavBarHidden() {
		return false;
	}
}
