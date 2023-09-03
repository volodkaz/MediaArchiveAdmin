package org.vladimir.homearchiveauth;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.List;

public class StreamTest {
    private List<TestClass> testClasses;

    @BeforeEach
    public void init(){
        testClasses = List.of(
                new TestClass(0, new TabTestClass(10, "tab_1", "tab_1"), new PropertyTestClass(20, "prperty_1", "property_1"), "data_1"),
                new TestClass(1, new TabTestClass(11, "tab_2", "tab_2"), new PropertyTestClass(21, "prperty_2", "property_2"), "data_2"),
                new TestClass(2, new TabTestClass(12, "tab_3", "tab_3"), new PropertyTestClass(22, "prperty_3", "property_3"), "data_3"),
                new TestClass(3, new TabTestClass(13, "tab_4", "tab_4"), new PropertyTestClass(23, "prperty_4", "property_4"), "data_4"),
                new TestClass(4, new TabTestClass(14, "tab_5", "tab_5"), new PropertyTestClass(24, "prperty_5", "property_5"), "data_5")
        );
    }
    @Test
    public void test(){
//        testClasses.stream().map(entity -> entity.tab)
    }

    private record TestClass(long id, TabTestClass tab, PropertyTestClass property, String data){};
    private record TabTestClass(long id, String name, String comment){};
    private record PropertyTestClass(long id, String name, String comment){};
}
